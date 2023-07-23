class ExceptionsController < ActionController::Base
  # Don't raise InvalidCrossOriginRequest for requesting not existing JavaScript file
  skip_after_action :verify_same_origin_request

  layout 'application'

  def show
    status = Integer(request.path_info.delete_prefix('/'), 10)

    if request.format.html? || request.inertia?
      render(inertia: 'Error/Show', props: { status: }, status:)
    else
      head status
    end
  end
end
